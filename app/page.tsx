import Image from "next/image";
import StudentCard from "./Components/StudentCard";

export default function Home() {
  return (
    <div className="inline-flex flex-wrap gap-4 p-4">
      <StudentCard name="Ali Nazar" age={8} class="2" RollNumber={531}></StudentCard>
      <StudentCard name="Hafsa Habib" age={12} class="6" RollNumber={341}></StudentCard>
      <StudentCard name="Abbas Shah" age={14} class="8" RollNumber={312}></StudentCard>
      <StudentCard name="Ali Haider" age={15} class="9" RollNumber={434}></StudentCard>
      <StudentCard name="Khabir KArim" age={16} class="10" RollNumber={736}></StudentCard>
      <StudentCard name="A.Raafay Qureshi" age={9} class="3" RollNumber={831}></StudentCard>
      <StudentCard name="Muhammad Anas" age={7} class="1" RollNumber={181}></StudentCard>
    </div>
  );
}
