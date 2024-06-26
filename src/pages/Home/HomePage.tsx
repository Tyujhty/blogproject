import { useEffect, useState } from "react";
import ArticleCard from "../../components/Article/ArticleCard";
import { ArticleInterface } from "../../services/interfaces/Article";
import { MessageInterface } from "../../services/interfaces/Message";
import MessageCard from "../../components/Message/MessageCard";
import moment from "moment";
import * as yup from "yup";
import { useFormik } from "formik";

interface HomePageProps {
  articles: ArticleInterface[];
}
export default function HomePage(props: HomePageProps) {
  const { articles } = props;

  const form = {
    name: "",
    subject: "",
    message: "",
    created_ad: moment().format("LLL"),
  };

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  });

  const [storedMessages, setStoredMessages] = useState<MessageInterface[]>([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setStoredMessages(JSON.parse(storedMessages));
    }
  }, []);

  function handleSubmitMessage(message: MessageInterface) {
    const updateMessages = [...storedMessages, message];
    setStoredMessages(updateMessages);
    localStorage.setItem("messages", JSON.stringify(updateMessages));
  }

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, "Le nom doit contenir 2 caractères minimum")
      .max(100, "Le nom ne doit pas dépasser 100 caractères")
      .required("Nom obligatoire"),
    subject: yup
      .string()
      .min(2, "Le sujet doit contenir 2 caractères minimum")
      .max(100, "Le sujet ne doit pas dépasser 100 caractères")
      .required("Sujet obligatoire"),
    message: yup.string().required("Message obligatoire"),
  });

  const formik = useFormik({
    initialValues: form,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      localStorage.setItem("form", JSON.stringify(values));
      handleSubmitMessage(values);
      formik.resetForm();
      alert("Message envoyé");
    },
  });

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div className="flex w-10/12 ">
          <div className="w-8/12">
            <h2 className="text-xl mb-4">Boîte de réception des messages</h2>
            <div className="w-11/12 bg-slate-200 p-4 mr-5 flex flex-col gap-2">
              {[...storedMessages]
                .reverse()
                .map((message: MessageInterface, index: number) => (
                  <MessageCard message={message} key={index} index={index} />
                ))}
            </div>
          </div>
          <div className="w-4/12">
            <h2 className="text-xl mb-4">Nous contacter</h2>
            <div className="bg-slate-200 w-full p-4">
              <form
                className="flex flex-col gap-2 w-full"
                onSubmit={formik.handleSubmit}
              >
                <label htmlFor="name" className="font-bold">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <br />
                <br />

                <label htmlFor="subject" className="font-bold">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                />
                <br />
                <br />

                <label htmlFor="message" className="font-bold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
                <br />

                <button
                  type="submit"
                  className="bg-lime-400 p-2 font-semibold rounded-md hover:bg-lime-500"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className=""></div>
        <h2 className="text-xl my-10 ">Dernier article publié</h2>
        {articles.length > 0 && (
          <ArticleCard
            article={articles[articles.length - 1]}
            index={articles.length - 1}
          />
        )}
      </div>
    </>
  );
}
