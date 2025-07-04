export const createCompany = async (data: any) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/companies/addNewCompany`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error creating company:", error);
    throw error;
  }
};
//{name: "Company 1", email: "company1@example.com", size: "Small", type: "Sole Proprietorship"}