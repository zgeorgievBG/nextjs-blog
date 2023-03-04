import {previewData} from "next/headers";

export default function Home() {
  if (previewData()) {
    return <div>Preview mode</div>;
  } else {
    return <div> Home page</div>;
  }

  // eslint-disable-next-line react/react-in-jsx-scope
}
