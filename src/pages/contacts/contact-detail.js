import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { getContacts } from "api/contacts";
import { ContactItemAvatar } from "components/contact-item";
import IconList from "components/icon-list";
import Loading from "components/loading";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { millisecondsToDateStr } from "utils/date";
import RecentStorage from "utils/recent-storage";

/**
 * Contact page component
 * Shows the details of single contact.
 */
export default function ContactDetailPage() {

	const { id } = useParams();

	const { isLoading, data } = useQuery(['contact', id], () => getContacts({ id }));

	useEffect(() => {

		const recentStorage = new RecentStorage("recent-contacts");
		recentStorage.addLast(id);

	}, [])

	if (isLoading) {
		return <Loading />
	}

	return (
		<div className="max-w-2xl mx-auto py-12 px-2">

			<div className="
					bg-white shadow-sm 
					rounded-3xl
					py-12 px-10
				">

					<header className="flex items-center mb-8">
						<ContactItemAvatar
							randomBGIndex={data?.first_name.charCodeAt(0)} 
							size={128}
							src={data?.avatar}
						/>
						<div className="ml-6 flex-1">
							<h1 className="text-2xl font-bold">
								{data?.first_name} {data?.last_name}
							</h1>
							<div className="mt-1 text-gray-500">
								{data?.address}
							</div>
						</div>
					</header>

					<div className="mb-10 text-slate-700 text-sm">
						{data?.note}
					</div>

					<h2 className="font-semibold mb-8">DETAILS</h2>

					<IconList className={"mb-4"}>
						{data?.phone && (
							<IconList.Item icon={faPhone} title="Phone">
								<a href={`tel:${data.phone}`}>
									{data?.phone}
								</a>
							</IconList.Item>
						)}
						{data?.email && (
							<IconList.Item icon={faEnvelope} title="Email">
								<a href={`mailto:${data?.email}`}>
									{data?.email}
								</a>
							</IconList.Item>
						)}
						{data?.company && (
							<IconList.Item icon={faBuilding} title="Company">
								{data?.company}
							</IconList.Item>
						)}
						{data?.telegram && (
							<IconList.Item icon={faTelegramPlane} title="Telegram">
								<a href={`https://t.me/${data?.telegram}`}>
									{data?.telegram}
								</a>
							</IconList.Item>
						)}
					</IconList>

					<div className="text-right text-xs text-gray-400">
						Last Update: {millisecondsToDateStr(data?.updatedAt)}
					</div>

				</div>

			

		</div>
	);
}