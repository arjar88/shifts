import { display } from "@mui/system";
import WorkerCard from "./WorkerCard";

const Workers = () => {
  const worker = [{ name: "james" }, { name: "chargels" }, { name: "jerome" }];

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {worker.map((w, i) => (
        <WorkerCard key={i} name={w.name} />
      ))}
    </div>
  );
};

export default Workers;
