import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";
import { Song } from "@/types";

interface SearchProps {
  searchParams: {
    title?: string; // Optional to avoid errors if no title is passed
  };
}

export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
  const title = searchParams?.title || ""; // Ensure title is a string
  const songs: Song[] = await getSongsByTitle(title);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;
