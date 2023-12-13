import UnsignInput from "./UnsignInput";
import { useEffect, useState } from "react";
import UnsignLabel from "./UnsignLabel";
import UnsignButton from "./UnsignButton";
import { useLocation } from "react-router-dom";
import { UNREGISTER_URL } from "../../constants";

type DelNewsletterUser = {
  email: string;
};

type UnRegisterRequest = {
  message: string;
};

const Unsign = () => {
  const [email, setEmail] = useState<string>("");
  const location = useLocation();
  const [fetchError, setFetchError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const mail = searchParams.get("email");
    if (mail) {
      setEmail(mail);
    }
  }, []);

  const handleSubmit = async (email: string) => {
    try {
      const data: DelNewsletterUser = { email };
      setFetchError("");
      setIsLoading(true);
      const response = await fetch(UNREGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const json = (await response.json()) as UnRegisterRequest;

        throw new Error(`Error: ${json.message}`);
      }
      setFetchError("Done");
    } catch (err: Error | unknown) {
      if (err instanceof Error) {
        setFetchError(err.message);
        console.log(err.message);
      } else {
        console.log(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-color1">
      <form
        className="flex flex-col gap-4 p-10 mx-auto border border-none bg-boxColor rounded-2xl "
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(email);
        }}
      >
        {!isLoading ? (
          <>
            <div className="flex gap-4">
              <UnsignLabel />
              <UnsignInput email={email} setState={setEmail} />
              <UnsignButton />
            </div>
            {fetchError && (
              <p className="pt-4 mx-auto text-red-500 w-fit">{fetchError}</p>
            )}
            {fetchError === "Done" && (
              <p className="pt-4 mx-auto text-green-500 w-fit">
                You have succesfully unsigned from Newsletter!
              </p>
            )}
          </>
        ) : (
          <div className="grid w-20 h-20 place-items-center">
            <div className="w-full h-full border-[12px] rounded-full border-cyan-600 border-t-slate-200 animate-spin"></div>
          </div>
        )}
      </form>
    </main>
  );
};
export default Unsign;
