import { Link, useSearchParams } from "react-router-dom";
import ContactItem from "../../components/contact-item";
import { SearchInput } from "../../components/search-input";
import { InfiniteScroll } from "../../features/infinite-scroll";
import { ITEMS_PER_PAGE } from "../../utils/constants";

const mockData = {
    "meta": {
        "skipped": 0,
        "limit": 30,
        "total": 4000,
        "criteria": {}
    },
    "items": [
        {
            "first_name": "Jabez",
            "last_name": "Robberts",
            "email": "jrobberts0@a8.net",
            "gender": "Genderfluid",
            "phone": "1787525707",
            "note": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "telegram": "jrobberts0",
            "avatar": "https://robohash.org/nihildictadistinctio.png?size=300x300&set=set1",
            "company": "Twitterwire",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 1
        },
        {
            "first_name": "Noella",
            "last_name": "Quenby",
            "email": null,
            "gender": "Genderqueer",
            "phone": "7163228630",
            "note": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
            "telegram": "nquenby1",
            "avatar": "https://robohash.org/harumaperiamsed.png?size=300x300&set=set1",
            "company": "Twitterlist",
            "address": "50 Westend Circle",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 2
        },
        {
            "first_name": "Sonja",
            "last_name": "Steptowe",
            "email": "ssteptowe2@ow.ly",
            "gender": "Genderfluid",
            "phone": "8458752469",
            "note": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            "telegram": "ssteptowe2",
            "avatar": "https://robohash.org/earumeumut.png?size=300x300&set=set1",
            "company": "Gigazoom",
            "address": "673 Browning Way",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 3
        },
        {
            "first_name": "Jayme",
            "last_name": "Peckett",
            "email": "jpeckett3@slate.com",
            "gender": "Agender",
            "phone": "4154258111",
            "note": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
            "telegram": "jpeckett3",
            "avatar": "https://robohash.org/quorepudiandaereiciendis.png?size=300x300&set=set1",
            "company": "Kazu",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 4
        },
        {
            "first_name": "Dru",
            "last_name": "Hazley",
            "email": "dhazley4@themeforest.net",
            "gender": "Bigender",
            "phone": "1168444954",
            "note": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "telegram": "dhazley4",
            "avatar": "https://robohash.org/quietet.png?size=300x300&set=set1",
            "company": "Yotz",
            "address": "7736 Mcguire Plaza",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 5
        },
        {
            "first_name": "Sindee",
            "last_name": "Garratt",
            "email": "sgarratt5@hc360.com",
            "gender": "Female",
            "phone": "9383695576",
            "note": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
            "telegram": "sgarratt5",
            "avatar": "https://robohash.org/doloraperiamqui.png?size=300x300&set=set1",
            "company": "Fanoodle",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 6
        },
        {
            "first_name": "Mommy",
            "last_name": "McIntosh",
            "email": null,
            "gender": "Non-binary",
            "phone": "3833667944",
            "note": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            "telegram": "mmcintosh6",
            "avatar": "https://robohash.org/ettemporalabore.png?size=300x300&set=set1",
            "company": "Voonder",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 7
        },
        {
            "first_name": "Kaspar",
            "last_name": "Delacour",
            "email": "kdelacour7@comcast.net",
            "gender": "Female",
            "phone": "7112940094",
            "note": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "telegram": "kdelacour7",
            "avatar": "https://robohash.org/veritatisindolores.png?size=300x300&set=set1",
            "company": "Myworks",
            "address": "576 Brickson Park Place",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 8
        },
        {
            "first_name": "Packston",
            "last_name": "McVicar",
            "email": "pmcvicar8@cbsnews.com",
            "gender": "Male",
            "phone": "1685863586",
            "note": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
            "telegram": "pmcvicar8",
            "avatar": "https://robohash.org/ametenimaspernatur.png?size=300x300&set=set1",
            "company": "Skimia",
            "address": "07190 Warbler Court",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 9
        },
        {
            "first_name": "Emmy",
            "last_name": "Parradine",
            "email": "eparradine9@myspace.com",
            "gender": "Female",
            "phone": "3868441151",
            "note": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            "telegram": "eparradine9",
            "avatar": "https://robohash.org/liberoetminima.png?size=300x300&set=set1",
            "company": "Meevee",
            "address": "50049 Buhler Alley",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 10
        },
        {
            "first_name": "Zachariah",
            "last_name": "Churcher",
            "email": null,
            "gender": "Bigender",
            "phone": "5307324336",
            "note": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            "telegram": null,
            "avatar": "https://robohash.org/omnisquiet.png?size=300x300&set=set1",
            "company": "Skalith",
            "address": "800 Scofield Drive",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 11
        },
        {
            "first_name": "Uta",
            "last_name": "McQuaide",
            "email": "umcquaideb@mtv.com",
            "gender": "Agender",
            "phone": "9472537313",
            "note": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
            "telegram": "umcquaideb",
            "avatar": "https://robohash.org/explicabononexpedita.png?size=300x300&set=set1",
            "company": "Skilith",
            "address": "6 Pond Avenue",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 12
        },
        {
            "first_name": "Portie",
            "last_name": "Ducker",
            "email": null,
            "gender": "Genderfluid",
            "phone": "5914128816",
            "note": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            "telegram": null,
            "avatar": "https://robohash.org/vitaecumsequi.png?size=300x300&set=set1",
            "company": "Skiptube",
            "address": "555 Eggendart Junction",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 13
        },
        {
            "first_name": "Odo",
            "last_name": "Sallan",
            "email": "osalland@washingtonpost.com",
            "gender": "Female",
            "phone": "1455203090",
            "note": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
            "telegram": "osalland",
            "avatar": "https://robohash.org/omnisfacerenostrum.png?size=300x300&set=set1",
            "company": "Meezzy",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 14
        },
        {
            "first_name": "Julissa",
            "last_name": "Hughesdon",
            "email": "jhughesdone@opera.com",
            "gender": "Genderqueer",
            "phone": "1276427742",
            "note": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
            "telegram": null,
            "avatar": "https://robohash.org/voluptatumnemoassumenda.png?size=300x300&set=set1",
            "company": "Devbug",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 15
        },
        {
            "first_name": "Hildy",
            "last_name": "Spick",
            "email": "hspickf@i2i.jp",
            "gender": "Genderfluid",
            "phone": "3868235504",
            "note": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
            "telegram": null,
            "avatar": "https://robohash.org/quibusdamillonemo.png?size=300x300&set=set1",
            "company": "Realpoint",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 16
        },
        {
            "first_name": "Jacintha",
            "last_name": "Wildblood",
            "email": "jwildbloodg@creativecommons.org",
            "gender": "Agender",
            "phone": "6282903552",
            "note": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
            "telegram": null,
            "avatar": "https://robohash.org/repudiandaequiquas.png?size=300x300&set=set1",
            "company": "Oyoba",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 17
        },
        {
            "first_name": "Holli",
            "last_name": "Emanueli",
            "email": null,
            "gender": "Non-binary",
            "phone": "6088846153",
            "note": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "telegram": "hemanuelih",
            "avatar": "https://robohash.org/autnisicumque.png?size=300x300&set=set1",
            "company": "Meevee",
            "address": "23309 Dorton Terrace",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 18
        },
        {
            "first_name": "Oswell",
            "last_name": "Martinello",
            "email": null,
            "gender": "Genderfluid",
            "phone": "1858979331",
            "note": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "telegram": "omartinelloi",
            "avatar": "https://robohash.org/sitsitnemo.png?size=300x300&set=set1",
            "company": "Linkbuzz",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 19
        },
        {
            "first_name": "Veronica",
            "last_name": "Craiker",
            "email": null,
            "gender": "Bigender",
            "phone": "9316683775",
            "note": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
            "telegram": null,
            "avatar": "https://robohash.org/quaeratsintdolor.png?size=300x300&set=set1",
            "company": "Gabcube",
            "address": "4196 Hanson Park",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 20
        },
        {
            "first_name": "Elsi",
            "last_name": "Randall",
            "email": "erandallk@ibm.com",
            "gender": "Male",
            "phone": "3252897416",
            "note": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
            "telegram": null,
            "avatar": null,
            "company": null,
            "address": "75 Clyde Gallagher Drive",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 21
        },
        {
            "first_name": "Linell",
            "last_name": "Poetz",
            "email": "lpoetzl@cisco.com",
            "gender": "Non-binary",
            "phone": "4479295424",
            "note": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
            "telegram": null,
            "avatar": "https://robohash.org/facilisullamassumenda.png?size=300x300&set=set1",
            "company": "Youfeed",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 22
        },
        {
            "first_name": "Dorian",
            "last_name": "Allenson",
            "email": "dallensonm@aol.com",
            "gender": "Female",
            "phone": "7538452264",
            "note": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
            "telegram": "dallensonm",
            "avatar": "https://robohash.org/doloresducimusin.png?size=300x300&set=set1",
            "company": "Skiptube",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 23
        },
        {
            "first_name": "Tristam",
            "last_name": "Dyde",
            "email": "tdyden@soup.io",
            "gender": "Genderfluid",
            "phone": "6458658460",
            "note": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
            "telegram": "tdyden",
            "avatar": "https://robohash.org/corporisrerumeaque.png?size=300x300&set=set1",
            "company": "Zoozzy",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 24
        },
        {
            "first_name": "Vidovic",
            "last_name": "Ledwith",
            "email": null,
            "gender": "Bigender",
            "phone": "4543406149",
            "note": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
            "telegram": "vledwitho",
            "avatar": "https://robohash.org/nontotamnecessitatibus.png?size=300x300&set=set1",
            "company": "Latz",
            "address": "82316 Elmside Center",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 25
        },
        {
            "first_name": "Nealson",
            "last_name": "Doody",
            "email": "ndoodyp@sakura.ne.jp",
            "gender": "Non-binary",
            "phone": "7363665737",
            "note": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "telegram": "ndoodyp",
            "avatar": "https://robohash.org/eaquelaboriosamtotam.png?size=300x300&set=set1",
            "company": "Meembee",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 26
        },
        {
            "first_name": "Ermentrude",
            "last_name": "Shemelt",
            "email": "eshemeltq@dmoz.org",
            "gender": "Bigender",
            "phone": "1969589688",
            "note": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
            "telegram": null,
            "avatar": null,
            "company": null,
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 27
        },
        {
            "first_name": "Vale",
            "last_name": "Spiers",
            "email": "vspiersr@webmd.com",
            "gender": "Polygender",
            "phone": "7214435200",
            "note": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            "telegram": null,
            "avatar": "https://robohash.org/nondoloribusa.png?size=300x300&set=set1",
            "company": "Minyx",
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 28
        },
        {
            "first_name": "Rolland",
            "last_name": "Minot",
            "email": "rminots@amazon.com",
            "gender": "Genderfluid",
            "phone": "6009579294",
            "note": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "telegram": null,
            "avatar": "https://robohash.org/autdolorblanditiis.png?size=300x300&set=set1",
            "company": "Jazzy",
            "address": "78587 Northwestern Crossing",
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 29
        },
        {
            "first_name": "Shanna",
            "last_name": "Lammers",
            "email": "slammerst@abc.net.au",
            "gender": "Non-binary",
            "phone": "2053535416",
            "note": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
            "telegram": "slammerst",
            "avatar": null,
            "company": null,
            "address": null,
            "createdAt": 1637996519400,
            "updatedAt": 1637996519400,
            "id": 30
        }
    ]
}

/**
 * Home page component
 * Shows the list of contacts, filter, search, etc.
 */
export default function HomePage() {

	const [searchParams, setSearchParams] = useSearchParams();
	const searchParamsDict = Object.fromEntries([...searchParams]);

	const handleSearch = search => {
		setSearchParams({ 
			...searchParamsDict,
			search
		 });
	}

	const handleNextPage = () => {
		
		const skip = Number(searchParams.get('skip')) +  ITEMS_PER_PAGE;
	
		setSearchParams({
			...searchParamsDict,
			skip
		})
	
		return new Promise(res => {
			setTimeout(() => {
				res();
			}, 2000);
		})
	}

	return (
		<div className="max-w-xl mx-auto py-12 px-2">

			{/** Page Title */}
			<h1 className="text-4xl font-semibold mb-12 text-slate-700">
				{mockData.meta.total} Contacts
			</h1>

			{/** Search Input */}
			<SearchInput className={"mb-8"} placeholder="Search Contacts.." onChange={handleSearch} defaultValue={searchParams.get('search')} />

			{/** List of contacts */}
			{mockData.items.map(contact => (
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
			))}

			{/** Pagination */}
			<InfiniteScroll
				hasMore={(mockData?.meta?.skipped + mockData.meta.limit) < (mockData.meta.total)}
				onNext={handleNextPage}
			/>
		</div>
	);
}