import { useFormik } from "formik";
import { ArticleInterface } from "../../services/interfaces/Article";
import moment from "moment";
import * as yup from "yup";

interface AddArticlePageProps {
  handleSubmitArticle: (article: ArticleInterface) => void;
}

export default function AddArticlePage(props: AddArticlePageProps) {
  const { handleSubmitArticle } = props;

  const formContact = {
    author: "",
    title: "",
    description: "",
    created_at: moment().format("LLL"),
  };

  const validationSchema = yup.object({
    author: yup
      .string()
      .min(2, "L'auteur nom doit contenir 2 caractères minimum")
      .max(100, "L'auteur ne doit pas dépasser 100 caractères")
      .required("Auteur obligatoire"),
    title: yup
      .string()
      .min(2, "Le titre doit contenir 2 caractères minimum")
      .max(100, "Le titre ne doit pas dépasser 100 caractères")
      .required("Titre obligatoire"),
    description: yup.string().required("Description de l'article obligatoire"),
  });

  const formik = useFormik({
    initialValues: formContact,
    validationSchema: validationSchema,

    onSubmit: (values) => {
      handleSubmitArticle(values);
      formik.resetForm();
      alert("Article ajouté au blog");
    },
  });

  return (
    <>
      <div className="h-full flex flex-col items-center mt-8 gap-12">
        <h1 className=" text-3xl">Ajouter un article</h1>
        <p>Lorem ipsum</p>
        <div className="flex justify-center w-full">
          <form
            className="flex flex-col w-1/2 p-8 gap-2 bg-slate-200 rounded"
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="author" className="font-semibold">
              Nom de l'auteur
            </label>
            <input
              type="text"
              name="author"
              id="author"
              className="p-2 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.author}
            />
            <small className="font-semibold text-red-700">
              {formik.errors.author}
            </small>
            <br />
            <br />

            <label htmlFor="title" className="font-semibold">
              Titre
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="p-2 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <small className="font-semibold text-red-700">
              {formik.errors.title}
            </small>
            <br />
            <br />

            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              name="description"
              className="p-2 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.description}
            ></textarea>
            <small className="font-semibold text-red-700">
              {formik.errors.description}
            </small>
            <br />
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
    </>
  );
}
