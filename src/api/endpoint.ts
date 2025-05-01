const API_URL = "http://localhost:3000/api";

export const createCompany = async (data: any) => {
  try {
    const response = await fetch(`${API_URL}/companies/addNewCompany`, {
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