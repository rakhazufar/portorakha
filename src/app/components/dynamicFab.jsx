import dynamic from "next/dynamic";

const FabNoSSR = dynamic(() => import("@app/components/fab"), {
  ssr: false,
});

export default function Fab() {
  return <FabNoSSR />;
}
