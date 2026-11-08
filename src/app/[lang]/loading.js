import styles from "./loading.module.css";

export default function Loading() {
  return (
    <main className={styles.container}>
      <div className={styles.spinner}></div>
      <h2>Loading Products...</h2>
      <p>Please wait while we fetch your products.</p>
    </main>
  );
}