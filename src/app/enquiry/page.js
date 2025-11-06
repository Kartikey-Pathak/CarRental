import EnquiryForm from "../../../components/Form";

export default function EnquiryPage({ searchParams }) {
  // Get city from URL query params
  const city = searchParams?.city || "";
  return <EnquiryForm city={city} />;
}
