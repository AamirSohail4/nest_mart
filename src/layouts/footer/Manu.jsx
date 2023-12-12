import { useState, useEffect } from "react";

export const Manu = () => {
  const [categories, setCategories] = useState([]);
  const apiUrl =
    "https://www.weberp.pk/app/msbooks/weberp_api.php?mask=msbooks&intCompanyID=1&tag=get_all_category";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <label htmlFor="categoryDropdown">Select a Category:</label>
      <select id="categoryDropdown">
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};
