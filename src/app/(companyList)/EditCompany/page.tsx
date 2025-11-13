"use client";

import React, { useState } from "react";
import Image from "next/image";
import CancelChange from "@/img/CancelChange.png";
import { FiTrash2, FiUploadCloud } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";

const EditCompany = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [gstEnabled, setGstEnabled] = useState(false);
    const [tdsEnabled, setTdsEnabled] = useState(false);

    const [files, setFiles] = useState<{ [key: string]: File | null }>({
        attachment: null,
        tradelogo: null,
        signcaption: null,
    });

    const selectedFiles = [
        { name: "Get Certificate.pdf", size: "978Kb" },
        { name: "Get Certificate.pdf", size: "978Kb" },
        { name: "Get Certificate.pdf", size: "978Kb" },
    ];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name;
        const file = e.target.files?.[0] || null;
        if (inputName) {
            setFiles((prev) => ({
                ...prev,
                [inputName]: file,
            }));
        }
    };

    const fileInputs = ["Attachment", "Trade Logo", "Sign Caption"];

    return (
        <div className="w-full min-h-screen bg-[#E0F4EC] flex flex-col lg:flex-row justify-center items-start py-6 px-3">
            <div className="bg-white w-full lg:max-w-7xl shadow-md border border-border rounded-none">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border px-4 py-3 gap-2">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Edit Company</h2>
                        <p className="text-sm text-[#007F5F] font-light">
                            Accounting Books / Select Company /{" "}
                            <span className="font-semibold">Edit Company</span>
                        </p>
                    </div>

                    <div className="flex gap-2 w-full md:w-auto justify-end">
                        <button
                            className="w-full md:w-auto px-5 py-2 bg-[#105F62] text-white text-sm transition"
                            onClick={() => setShowPopup(true)}
                        >
                            CANCEL
                        </button>
                        <button className="w-full md:w-auto px-5 py-2 bg-[#105F62] text-white text-sm transition">
                            SUBMIT
                        </button>
                    </div>
                </div>

                {/* Cancel Popup */}
                {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50 px-4">
                        <div className="rounded-md shadow-lg bg-white w-full max-w-sm">
                            <div className="bg-gray-100 w-full flex justify-center items-center py-6">
                                <Image
                                    src={CancelChange}
                                    alt="Cancel Changes"
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h1 className="text-lg font-bold text-gray-800 mb-2">
                                    Cancel Changes!
                                </h1>
                                <p className="text-xs text-gray-600 mb-6">
                                    Leaving this page will delete all unsaved changes.
                                </p>
                                <div className="flex justify-center gap-3">
                                    <button
                                        onClick={() => {
                                            alert("Changes Cancelled!");
                                            setShowPopup(false);
                                        }}
                                        className="bg-[#0C6663] text-white px-6 py-2 text-sm rounded-sm"
                                    >
                                        YES
                                    </button>
                                    <button
                                        onClick={() => setShowPopup(false)}
                                        className="bg-gray-400 text-white px-6 py-2 text-sm rounded-sm"
                                    >
                                        NO
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Form */}
                <div className="p-4 md:p-6 space-y-8 text-[#003C2F]">
                    {/* Basic Info */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-700">Company Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Company Name*
                                </label>
                                <input
                                    type="text"
                                    className="w-full border px-3 py-2 rounded-sm"
                                    placeholder="ABC Ltd."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Print Name*
                                </label>
                                <input
                                    type="text"
                                    className="w-full border px-3 py-2 rounded-sm"
                                    placeholder="ABC Ltd."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Company Type*
                                </label>
                                <select className="w-full border px-3 py-2 rounded-sm">
                                    <option>Select</option>
                                    <option>Private Limited</option>
                                    <option>LLP</option>
                                    <option>Proprietorship</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Business Type*
                                </label>
                                <select className="w-full border px-3 py-2 rounded-sm">
                                    <option>Select</option>
                                    <option>Manufacturing</option>
                                    <option>Trading</option>
                                    <option>Services</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-semibold mb-1">
                                    Company Financial Year
                                </label>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        type="date"
                                        className="border px-3 py-2 w-full text-sm rounded-sm"
                                    />
                                    <input
                                        type="date"
                                        className="border px-3 py-2 w-full text-sm rounded-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">
                            Company Contact Details
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <input
                                type="text"
                                placeholder="Legal Person *"
                                className="border px-3 py-2 rounded-none"
                            />
                            <input
                                type="text"
                                placeholder="Designation"
                                className="border px-3 py-2 rounded-none"
                            />
                            <input
                                type="email"
                                placeholder="Company Email *"
                                className="border px-3 py-2 rounded-none"
                            />
                            <input
                                type="tel"
                                placeholder="Contact Number *"
                                className="border px-3 py-2 rounded-none"
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <h3 className="font-semibold text-gray-700 mb-2">Company Address</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="Official Address *"
                                className="border px-3 py-2 rounded-none"
                            />
                            <select className="border px-3 py-2 rounded-none">
                                <option>State *</option>
                                <option>Maharashtra</option>
                                <option>Gujarat</option>
                                <option>Delhi</option>
                            </select>
                            <select className="border px-3 py-2 rounded-none">
                                <option>City *</option>
                                <option>Mumbai</option>
                                <option>Surat</option>
                                <option>Delhi</option>
                            </select>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            <input
                                type="text"
                                value="India"
                                readOnly
                                className="border px-3 py-2 rounded-none bg-gray-100"
                            />
                            <input
                                type="text"
                                placeholder="PIN Code *"
                                className="border px-3 py-2 rounded-none"
                            />
                        </div>
                    </div>

                    {/* GST & TDS */}
                    <div className="space-y-8">
                        {/* GST */}
                        <div className="space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <span className="font-semibold">
                                    Enable Goods and Service Tax (GST)
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setGstEnabled(!gstEnabled)}
                                    className={`w-11 h-6 flex items-center rounded-full p-[2px] transition-colors duration-300 ${gstEnabled ? "bg-[#1F8F73]" : "bg-gray-300"
                                        }`}
                                >
                                    <div
                                        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${gstEnabled ? "translate-x-5" : "translate-x-0"
                                            }`}
                                    />
                                </button>
                            </div>

                            {gstEnabled && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <input
                                        type="text"
                                        placeholder="GST Number *"
                                        className="border px-3 py-2 rounded-full"
                                    />
                                    <input
                                        type="date"
                                        className="border px-3 py-2 rounded-full"
                                    />
                                    <select className="border px-3 py-2 rounded-none">
                                        <option>Registration Type *</option>
                                        <option>Regular</option>
                                        <option>Composition</option>
                                        <option>Exports</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        {/* TDS */}
                        <div className="space-y-3 border-t pt-6">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <span className="font-semibold">
                                    Enable Tax Deducted at Source (TDS)
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setTdsEnabled(!tdsEnabled)}
                                    className={`w-11 h-6 flex items-center rounded-none p-[2px] transition-colors duration-300 ${tdsEnabled ? "bg-[#1F8F73]" : "bg-gray-300"
                                        }`}
                                >
                                    <div
                                        className={`w-5 h-5 bg-white rounded-none  transform transition-transform duration-300 ${tdsEnabled ? "translate-x-5" : "translate-x-0"
                                            }`}
                                    />
                                </button>
                            </div>

                            {tdsEnabled && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="TAN Number *"
                                        className="border px-3 py-2 rounded-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Percentage *"
                                        className="border px-3 py-2 rounded-none"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* File Upload + Attachments */}
            <div className="w-full mt-6 lg:mt-0 lg:ml-4">
                <div className="bg-white p-4 rounded-none shadow space-y-4">
                    <h3 className="text-[43916F] font-semibold">Add Company Logo / Signature</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {fileInputs.map((label) => {
                            const key = label.toLowerCase().replace(" ", "");
                            return (
                                <div key={key}>
                                    <label
                                        htmlFor={`${key}File`}
                                        className="border-1 border-border rounded-none flex flex-col items-center justify-center h-28 cursor-pointer hover:bg-green-50 transition"
                                    >
                                        <FiUploadCloud className="text-teal-700 w-6 h-6 mb-1" />
                                        <p className="text-gray-700 text-xs text-center px-2">
                                            Drag and drop or click to upload
                                        </p>
                                        <input
                                            id={`${key}File`}
                                            type="file"
                                            name={key}
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                    {files[key] && (
                                        <p className="mt-1 text-xs text-green-700 truncate">
                                            Selected: <span className="font-medium">{files[key]?.name}</span>
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-white mt-4 p-4 rounded-none shadow">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">
                        Selected Attachment
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {selectedFiles.map((file, index) => (
                            <div
                                key={index}
                                className="flex items-center border bg-white rounded-none px-3 py-2 shadow-sm w-full sm:w-60"
                            >
                                <div className="flex items-center gap-2 flex-1">
                                    <FaFilePdf className="text-green-700 w-6 h-6" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-800">
                                            {file.name}
                                        </span>
                                        <span className="text-xs text-gray-500">{file.size}</span>
                                    </div>
                                </div>
                                <button className="ml-2 text-green-700 hover:text-red-600 transition">
                                    <FiTrash2 className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCompany;
