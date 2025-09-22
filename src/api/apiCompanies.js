// import supabaseClient, { supabaseUrl } from "@/utils/supabase";

// // Fetch Companies
// export async function getCompanies(token) {
//   const supabase = await supabaseClient(token);
//   const { data, error } = await supabase.from("companies").select("*");

//   if (error) {
//     console.error("Error fetching Companies:", error);
//     return null;
//   }

//   return data;
// }

// // Add Company
// export async function addNewCompany(token, _, companyData) {
//   const supabase = await supabaseClient(token);

//   const random = Math.floor(Math.random() * 90000);
//   const fileName = `logo-${random}-${companyData.name}`;

//   const { error: storageError } = await supabase.storage
//     .from("company-logo")
//     .upload(fileName, companyData.logo);

//   if (storageError) throw new Error("Error uploading Company Logo");

//   const logo_url = `${supabaseUrl}/storage/v1/object/public/company-logo/${fileName}`;

//   const { data, error } = await supabase
//     .from("companies")
//     .insert([
//       {
//         name: companyData.name,
//         logo_url: logo_url,
//       },
//     ])
//     .select();

//   if (error) {
//     console.error(error);
//     throw new Error("Error submitting Companys");
//   }

//   return data;
// }





import supabaseClient, { supabaseUrl } from "@/utils/supabase";

// Allowed image types
const ALLOWED_IMAGE_TYPES = ["png", "jpg", "jpeg", "gif"];

// Fetch Companies
export async function getCompanies(token) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase.from("companies").select("*");

  if (error) {
    console.error("Error fetching Companies:", error);
    return null;
  }

  return data;
}

// Add Company
export async function addNewCompany(token, _, companyData) {
  const supabase = await supabaseClient(token);

  if (!companyData.logo) {
    throw new Error("Company logo is required");
  }

  // 1️⃣ Get file extension
  const fileExt = companyData.logo.name.split(".").pop().toLowerCase();

  if (!ALLOWED_IMAGE_TYPES.includes(fileExt)) {
    throw new Error(
      `Invalid file type. Only ${ALLOWED_IMAGE_TYPES.join(", ")} are allowed`
    );
  }

  // 2️⃣ Generate unique file name
  const random = Math.floor(Math.random() * 90000);
  const fileName = `logo-${random}-${companyData.name}.${fileExt}`;

  // 3️⃣ Upload to Supabase Storage
  const { error: storageError } = await supabase.storage
    .from("company_logo")
    .upload(fileName, companyData.logo, { cacheControl: "3600", upsert: true });

  if (storageError) {
    console.error("Storage Upload Error:", storageError);
    throw new Error("Error uploading Company Logo");
  }

  // 4️⃣ Get public URL
  const logo_url = `${supabaseUrl}/storage/v1/object/public/company_logo/${fileName}`;

  // 5️⃣ Insert company into database
  const { data, error } = await supabase
    .from("companies")
    .insert([
      {
        name: companyData.name,
        logo_url: logo_url,
      },
    ])
    .select();

  if (error) {
    console.error("Database Insert Error:", error);
    throw new Error("Error submitting Company");
  }

  return data;
}
