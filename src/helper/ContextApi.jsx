import axios from "axios";
import { createContext, useState } from "react";

export const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
    const [developers, setDevelopers] = useState(null);

    const getAllDevelopers = async () => {
        try {
            // Fetching developer data (API that includes image URL)
            const { data } = await axios.get("https://randomuser.me/api/?results=50"); // Fetch 50 developers

            // Log the data to check the structure and the image URLs
            console.log(data);

            // Mapping developer data from API response
            const mappedData = data.results.map((user) => ({
                title: user.name.first + " " + user.name.last,
                image: user.picture.large,  // Assuming the API returns an image URL in `picture.large`
                creator: [user.location.city],  // Just an example, you can map any other field
                episodes: user.email,  // Just an example, you can map any other field
            }));

            setDevelopers(mappedData);  // Set the developers once fetched
        } catch (error) {
            console.error("Error fetching developer data:", error);
        }
    };

    return (
        <ContextApi.Provider value={{ name: "zipinno", getAllDevelopers, developers }}>
            {children}
        </ContextApi.Provider>
    );
};
