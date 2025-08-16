// app/dashboard/upload/upload-client.js
"use client";

import { useRef, useState } from "react";
import { FileUp, Upload, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function UploadClient() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click(); // triggers hidden input
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    try {
      // Fake upload request
      const res = await fetch("/api/upload", {
        method: "POST",
        body: file, // Just send the File object directly for mock
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      console.log("Upload successful:", data);

      // Reset after upload
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Failed to upload file");
    } finally {
      setUploading(false);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Upload Bill</CardTitle>
          <CardDescription>
            Upload a bill document for AI extraction. Supported formats: PDF,
            JPG, PNG
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!file ? (
            <div
              className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-colors ${
                dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <FileUp className="mb-4 h-12 w-12 text-gray-400" />
              <p className="mb-2 text-lg font-medium">
                Drag and drop your file here
              </p>
              <p className="mb-4 text-sm text-gray-500">or</p>

              <label className="cursor-pointer mt-4 inline-block">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <Button variant="outline" onClick={handleBrowseClick}>
                  Browse Files
                </Button>
              </label>
            </div>
          ) : (
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4 rounded-md bg-blue-100 p-2">
                    <FileUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={removeFile}
                  disabled={uploading}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" disabled={uploading}>
            Cancel
          </Button>
          <Button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="min-w-[120px]"
          >
            {uploading ? (
              <div className="flex items-center">
                <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing
              </div>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
