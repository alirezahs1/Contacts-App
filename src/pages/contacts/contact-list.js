import { Link, useSearchParams } from "react-router-dom";
import ContactItem from "components/contact-item";
import SearchInput from "components/search-input";
import { ITEMS_PER_PAGE } from "utils/constants";
import { getContacts } from "api/contacts";
import { useQuery } from "react-query";
import Loading from "components/loading";
import { serializeSearchParam } from "utils/api";
import RecentStorage from "utils/recent-storage";
import RecentContact from "components/recent-contact";

/**
 * Contact's list
 * Shows the list of contacts, filter, search, etc.
 */
export default function ContactListPage() {

	// Get the search params from the URL
	const [searchParams, setSearchParams] = useSearchParams();
	
	// Convert the search params to a serialized dictionary
	const searchParamsDict = Object.fromEntries([...searchParams]);

	// Fetch the contacts
	const { isLoading, data } = useQuery(['contacts', searchParamsDict], () => 
									getContacts({ params: {
										...serializeSearchParam(searchParamsDict, ["first_name"]),
										limit: ITEMS_PER_PAGE
									} })
								);

	// Get recent contacts from storage
	const recentStorage = new RecentStorage("recent-contacts");
	const recentContacts = recentStorage.getInArray();

	// Fetch recent contacts from API
	const recentContactsData = useQuery(['contacts', recentContacts], () =>
										recentContacts.length > 0 && getContacts({ params: {
											where: {id: {in: recentContacts}}
										} })
								).data


	const handleSearch = search => {
		setSearchParams({ 
			...searchParamsDict,
			search,
			skip: 0
		});
	}

	const handleNextPage = (move=1) => {
		
		const skip = Number(searchParams.get('skip')) +  ITEMS_PER_PAGE * move;
	
		setSearchParams({
			...searchParamsDict,
			skip,
		})
	
		return new Promise(res => {
			setTimeout(() => {
				res();
			}, 2000);
		})
	}

	return (
		<div className="max-w-2xl mx-auto py-12 px-2">

			{/** Page Title */}
			<h1 className="text-4xl font-semibold mb-12 text-slate-700">
				{data?.meta.total} Contacts
			</h1>

			{/** Search Input */}
			<SearchInput className={"mb-8"} placeholder="Search Contacts.." onChange={handleSearch} defaultValue={searchParams.get('search')} />

			{/** Recent visited contacts */}
			{recentContactsData?.items?.length > 0 && (
				<div className="mb-8 flex flex-wrap">
					{recentContactsData.items.map(({id, first_name, last_name}) => (
						<RecentContact key={id} id={id} name={`${first_name} ${last_name}`} />
					))}
				</div>
			)}

			{/** Empty message */}
			{data?.items?.length === 0 && (
				<div className="text-center text-gray-500">
					No contacts found.
				</div>
			)}

			{isLoading ? (
				<Loading />
			) : (
				/** List of contacts */
				data?.items.map(contact => (
					<Link to={`/${contact.id}/`} key={contact.id}>
						<ContactItem
							key={contact.id}
							className={"mb-4"}
							avatar={contact.avatar}
							name={`${contact.first_name} ${contact.last_name}`}
							phone={contact.phone}
							address={contact.address}
						/>
					</Link>
				))
			)}


			<div className="flex justify-between">
				{data?.meta.skipped > 0 && (
					<button onClick={() => handleNextPage(-1)}>Previous</button>
				)}
				{(data?.meta?.skipped + data?.meta.limit) < (data?.meta.total) && (
					<button className="ml-auto" onClick={() => handleNextPage(1)}>Next</button>
				)}
			</div>
		</div>
	);
}