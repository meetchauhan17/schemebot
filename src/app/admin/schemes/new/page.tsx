"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Save, Check, Plus, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Zod schema matching our Scheme type
const schemeSchema = z.object({
  name: z.string().min(3, "Name is required"),
  nameHi: z.string().min(3, "Hindi name is required"),
  nameGu: z.string().optional(),
  department: z.string().min(3, "Department is required"),
  ministry: z.string().min(3, "Ministry is required"),
  category: z.string().min(1, "Category is required"),
  state: z.string().min(1, "State is required"),
  description: z.string().min(20, "Detailed description required"),
  descriptionHi: z.string().min(20, "Hindi description required"),
  benefitAmount: z.string().min(1, "Benefit amount string required"),
  benefits: z.array(z.object({ value: z.string().min(1) })).min(1, "At least one benefit required"),
  eligibility: z.object({
    minAge: z.number().nullable(),
    maxAge: z.number().nullable(),
    gender: z.enum(["all", "female", "male"]),
    incomeLimit: z.number().nullable(),
    caste: z.array(z.string()).min(1),
    occupation: z.array(z.string()).min(1),
    states: z.array(z.string()),
    additionalCriteria: z.array(z.object({ value: z.string() }))
  }),
  requiredDocuments: z.array(z.object({
    name: z.string().min(1),
    mandatory: z.boolean(),
    purpose: z.string().min(1),
    howToGet: z.string()
  })),
  applicationProcess: z.array(z.object({ value: z.string() })).min(1),
  officialLink: z.string().url(),
  tags: z.string(),
  deadline: z.string().optional()
});

type SchemeFormValues = z.infer<typeof schemeSchema>;

const defaultValues: Partial<SchemeFormValues> = {
  eligibility: {
    minAge: null,
    maxAge: null,
    gender: "all",
    incomeLimit: null,
    caste: ["all"],
    occupation: ["all"],
    states: ["all"],
    additionalCriteria: [{ value: "" }]
  },
  benefits: [{ value: "" }],
  requiredDocuments: [{ name: "Aadhaar Card", mandatory: true, purpose: "Identity verification", howToGet: "Download from UIDAI portal" }],
  applicationProcess: [{ value: "" }],
  tags: ""
};

export default function AddSchemePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, control, handleSubmit, formState: { errors } } = useForm<SchemeFormValues>({
    resolver: zodResolver(schemeSchema),
    defaultValues
  });

  const { fields: benefitFields, append: appendBenefit, remove: removeBenefit } = useFieldArray({ control, name: "benefits" });
  const { fields: processFields, append: appendProcess, remove: removeProcess } = useFieldArray({ control, name: "applicationProcess" });
  const { fields: docFields, append: appendDoc, remove: removeDoc } = useFieldArray({ control, name: "requiredDocuments" });
  const { fields: criteriaFields, append: appendCriteria, remove: removeCriteria } = useFieldArray({ control, name: "eligibility.additionalCriteria" });

  const onSubmit = async (data: SchemeFormValues) => {
    setIsSubmitting(true);
    // Transform arrays back to simple strings
    const finalData = {
      ...data,
      id: data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      benefits: data.benefits.map(b => b.value),
      applicationProcess: data.applicationProcess.map(p => p.value),
      eligibility: {
        ...data.eligibility,
        additionalCriteria: data.eligibility.additionalCriteria.map(c => c.value)
      },
      tags: data.tags.split(",").map(t => t.trim())
    };

    // Simulate API call
    console.log("Saving Scheme Data:", finalData);
    await new Promise(r => setTimeout(r, 1000));
    
    alert("Scheme successfully added! (Simulated)");
    setIsSubmitting(false);
    router.push("/admin/schemes");
  };

  const InputField = ({ label, name, type="text", placeholder="", error }: any) => (
    <div>
      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
      <input type={type} {...register(name, { valueAsNumber: type === 'number' })} placeholder={placeholder} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500" />
      {error && <p className="text-red-500 text-xs mt-1 font-semibold">{error.message}</p>}
    </div>
  );

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/schemes" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Add New Scheme</h1>
          <p className="text-slate-500">Fill in the details to publish a new scheme to the database.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Basic Info */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">1. Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Scheme Name (English)*" name="name" error={errors.name} />
            <InputField label="Scheme Name (Hindi)*" name="nameHi" error={errors.nameHi} />
            <InputField label="Department*" name="department" error={errors.department} />
            <InputField label="Ministry*" name="ministry" error={errors.ministry} />
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Category*</label>
              <select {...register("category")} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 outline-none">
                <option value="agriculture">Agriculture</option>
                <option value="education">Education</option>
                <option value="health">Health</option>
                <option value="housing">Housing</option>
                <option value="women">Women</option>
              </select>
            </div>
            
            <InputField label="State (Use 'all' for central schemes)*" name="state" error={errors.state} />
          </div>
        </div>

        {/* Details */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">2. Description & Benefits</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Description (English)*</label>
              <textarea {...register("description")} rows={4} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 outline-none" />
              {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Description (Hindi)*</label>
              <textarea {...register("descriptionHi")} rows={4} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 outline-none" />
            </div>
            <InputField label="Core Benefit Amount String (e.g. ₹6,000/year)*" name="benefitAmount" error={errors.benefitAmount} />
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Bullet Point Benefits</label>
              {benefitFields.map((field, index) => (
                <div key={field.id} className="flex gap-2 mb-2">
                  <input {...register(`benefits.${index}.value`)} className="flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900" />
                  <button type="button" onClick={() => removeBenefit(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-5 h-5"/></button>
                </div>
              ))}
              <button type="button" onClick={() => appendBenefit({ value: "" })} className="text-sm font-bold text-blue-600 flex items-center gap-1 mt-2">
                <Plus className="w-4 h-4" /> Add Benefit
              </button>
            </div>
          </div>
        </div>

        {/* Eligibility (Simplified for brevity) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">3. Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <InputField label="Min Age" name="eligibility.minAge" type="number" />
            <InputField label="Max Age" name="eligibility.maxAge" type="number" />
            <InputField label="Max Income (₹)" name="eligibility.incomeLimit" type="number" />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Additional Criteria</label>
            {criteriaFields.map((field, index) => (
              <div key={field.id} className="flex gap-2 mb-2">
                <input {...register(`eligibility.additionalCriteria.${index}.value`)} className="flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900" />
                <button type="button" onClick={() => removeCriteria(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-5 h-5"/></button>
              </div>
            ))}
            <button type="button" onClick={() => appendCriteria({ value: "" })} className="text-sm font-bold text-blue-600 flex items-center gap-1 mt-2">
              <Plus className="w-4 h-4" /> Add Criteria
            </button>
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">4. Required Documents</h2>
          {docFields.map((field, index) => (
            <div key={field.id} className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl mb-4 relative bg-slate-50 dark:bg-slate-950/50">
              <button type="button" onClick={() => removeDoc(index)} className="absolute top-4 right-4 text-red-500"><Trash2 className="w-5 h-5"/></button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Document Name" name={`requiredDocuments.${index}.name`} />
                <InputField label="Purpose" name={`requiredDocuments.${index}.purpose`} />
                <div className="md:col-span-2">
                  <InputField label="How to Get It" name={`requiredDocuments.${index}.howToGet`} />
                </div>
                <div className="md:col-span-2 flex items-center gap-2">
                  <input type="checkbox" {...register(`requiredDocuments.${index}.mandatory`)} id={`man-${index}`} className="w-4 h-4" />
                  <label htmlFor={`man-${index}`} className="text-sm font-bold">Mandatory Document</label>
                </div>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => appendDoc({ name: "", mandatory: true, purpose: "", howToGet: "" })} className="text-sm font-bold text-blue-600 flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add Document
          </button>
        </div>

        {/* Meta */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">5. Application & Meta</h2>
          <div className="grid grid-cols-1 gap-6">
            <InputField label="Official Application URL*" name="officialLink" error={errors.officialLink} />
            <InputField label="Comma Separated Tags (e.g. pm kisan, farmers)*" name="tags" error={errors.tags} />
            <InputField label="Deadline (YYYY-MM-DD) optional" name="deadline" />
          </div>
        </div>

        {/* Actions */}
        <div className="sticky bottom-4 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl flex justify-between items-center">
          <button type="button" className="px-6 py-3 font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
            Save Draft
          </button>
          <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg flex items-center gap-2 transition-all">
            {isSubmitting ? "Saving..." : <><Check className="w-5 h-5"/> Publish Scheme</>}
          </button>
        </div>

      </form>
    </div>
  );
}