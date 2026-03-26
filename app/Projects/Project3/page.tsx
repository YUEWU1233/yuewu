import BackButton from "../../BackButton";
import Image from "next/image";

export default function Project3Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <BackButton href="/Projects" />
      </div>

      <article className="rounded-3xl border border-emerald-100 bg-white/90 p-5 shadow-sm md:p-8">
        <h1
          className="text-2xl leading-tight text-slate-900 md:text-4xl"
          style={{
            fontFamily: 'var(--font-literary-serif), "Cormorant Garamond", "Times New Roman", serif',
          }}
        >
          Machine Learning for French Text Analyzing
        </h1>

        <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100">
          <Image
            src="/project3_1.jpg"
            alt="French text machine learning project"
            width={1400}
            height={840}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base leading-relaxed text-slate-700 md:text-lg">
          This project involved building a machine learning model to assess the
          difficulty level of French texts (from A1 to C2) for language
          learners. Several algorithms were tested and optimized to ensure
          accurate predictions. An interactive interface was developed using
          Streamlit, allowing users to input any French text and instantly
          receive a difficulty level assessment, making it a practical tool for
          language learners and educators.
        </p>

        <p className="mt-6 text-sm leading-7 text-slate-700 md:text-base">
          This project was designed to assist language learners of French by
          accurately classifying the CEFR difficulty level (A1 to C2) of
          written French texts. The project followed a comprehensive machine
          learning pipeline, beginning with data preparation and feature
          extraction using advanced NLP models. We applied pre-trained
          Transformer models, BERT and CamemBERT, to extract rich semantic and
          syntactic features from text. The dataset was split into training and
          validation sets, with categorical CEFR levels mapped to numeric
          labels for classification. Feature vectors were scaled using
          StandardScaler, and multiple machine learning algorithms were
          evaluated, including SVM, Random Forest, LightGBM, and MLP.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          Among them, the SVM model achieved the highest overall accuracy and
          F1-score. To enhance model generalization, we employed data
          augmentation techniques such as back translation and NLP-based
          methods, for example synonym replacement and random
          insertion/deletion. These significantly improved model performance,
          especially for MLP, which reached an F1-score of 0.807. Hyperparameter
          tuning using GridSearchCV further optimized Random Forest and Extra
          Trees classifiers. Additionally, we implemented ensemble learning by
          averaging predictions from both BERT and CamemBERT models, leveraging
          their respective strengths in multilingual and French-specific
          contexts. The final model achieved over 0.6 accuracy on a separate
          test set.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
          We integrated the best-performing model into a Streamlit web
          application. This interactive interface allows users to input French
          texts and instantly receive predicted difficulty levels, providing a
          practical and accessible tool for learners, teachers, and content
          creators in the language education space.
        </p>
      </article>
    </main>
  );
}



