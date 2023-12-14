import { Accordion } from "flowbite-react";
import useAxios from "../../Hook/useAxios";
import useAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";

const NoteBook = () => {
  const { user } = useAuth();
  const axios = useAxios();
  //   axios.get(`http://localhost:5000/api/v1/user/noteBook/${user?.email}`);
  const userEmail = user?.email;
  const { data: noteBook } = useQuery({
    queryKey: ["noteBook", user?.email],
    queryFn: async () => {
      return await axios.get(`http://localhost:5000/api/v1/user/noteBook`, {
        params: { userEmail },
        withCredentials: true,
      });
    },
  });

  return (
    <div className="container mx-auto space-y-4">
      <h2 className="text-4xl font-semibold text-center mb-6">NoteBook</h2>
      {noteBook?.data.map((item) => (
        <div key={item._id}>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>{item?.noteTitle}</Accordion.Title>
              <Accordion.Content>
                <p>
                  <span className="font-semibold">Blog: </span>
                  {item?.blogTitle}
                </p>
                <p>
                  <span className="font-semibold">Date: </span>
                  {item?.submissionDate}
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {item?.note}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default NoteBook;
