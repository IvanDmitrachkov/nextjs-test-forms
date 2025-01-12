import styles from "./page.module.css";
import TestForm from "@/app/simple-form/test-form/test-form";

export default async function Home() {
  return (
    <div className={styles.page}>
      <TestForm />
    </div>
  );
}
