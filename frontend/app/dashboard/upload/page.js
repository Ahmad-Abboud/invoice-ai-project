// app/dashboard/upload/page.js
import UploadClient from "./upload-client";

export const metadata = {
  title: "Upload Bill - AI Bill Extraction System",
  description: "Upload a new bill for AI processing",
};

export default function UploadPage() {
  return <UploadClient />;
}
