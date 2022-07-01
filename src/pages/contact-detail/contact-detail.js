import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactItemAvatar } from "../../components/contact-item";
import IconList from "../../components/icon-list";
import { millisecondsToDateStr } from "../../utils/date";

const mockData = {
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
}

/**
 * Contact page component
 * Shows the details of single contact.
 */
export default function ContactDetailPage() {


	return (
		<div className="max-w-xl mx-auto py-12 px-2">

			<div className="
					bg-white shadow-sm 
					rounded-3xl
					py-12 px-10
				">

					<header className="flex items-center mb-8">
						<ContactItemAvatar
							randomBGIndex={mockData.first_name.charCodeAt(0)} 
							size={128}
							src={mockData.avatar}
						/>
						<div className="ml-6 flex-1">
							<h1 className="text-2xl font-bold">
								{mockData.first_name} {mockData.last_name}
							</h1>
							<div className="mt-1 text-gray-500">
								{mockData.address}
							</div>
						</div>
					</header>

					<div className="mb-10 text-slate-700 text-sm">
						{mockData.note}
					</div>

					<h2 className="font-semibold mb-8">DETAILS</h2>

					<IconList className={"mb-4"}>
						<IconList.Item icon={faPhone} title="Phone">
							<a href={`tel:${mockData.phone}`}>
								{mockData.phone}
							</a>
						</IconList.Item>
						<IconList.Item icon={faEnvelope} title="Email">
							<a href={`mailto:${mockData.email}`}>
								{mockData.email}
							</a>
						</IconList.Item>
						<IconList.Item icon={faBuilding} title="Company">
							{mockData.company}
						</IconList.Item>
						<IconList.Item icon={faTelegramPlane} title="Telegram">
							<a href={`https://t.me/${mockData.telegram}`}>
								{mockData.telegram}
							</a>
						</IconList.Item>
					</IconList>

					<div className="text-right text-xs text-gray-400">
						Last Update: {millisecondsToDateStr(mockData.updatedAt)}
					</div>

				</div>

			

		</div>
	);
}