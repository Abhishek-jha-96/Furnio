import BlogElement from "./BlogElement";

export default function BlogPageTemplate() {
  return (
  <main className="container mx-auto py-12 flex">
       <section className="w-[70%]"><BlogElement /></section>
       <section className="w-[30%]">blog section</section>   
  </main>
  );
}
