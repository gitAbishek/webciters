import { FormEvent, useEffect, useRef, useState } from "react";
import { Form, useSearchParams } from "@remix-run/react";
import { SearchIcon } from "~/components/Icon";
import { Root, SearchInput, SearchWrapper } from "./styled";
import { ROUTE_SEARCH } from "~/utils/constants";
import { AccessibleButton } from "~/components/AccessibleButton";

type Props = {
  className?: string;
  onFocusChange: (isFocused: boolean) => void;
};

export function Search({ className, onFocusChange }: Props) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const formRef = useRef<HTMLFormElement>(null);
  const searchFieldRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState(query || "");

  useEffect(() => {
    if (!query) setInput("");
  }, [query]);

  return (
    <Root className={className}>
      <Form ref={formRef} action={ROUTE_SEARCH} onSubmit={onHandleSubmit}>
        <SearchWrapper>
          <AccessibleButton type="button" onClick={onHandleSearchClick}>
            <SearchIcon size="md" />
          </AccessibleButton>
          <SearchInput
            onBlur={() => onFocusChange(false)}
            onFocus={() => onFocusChange(true)}
            ref={searchFieldRef}
            type="search"
            name="query"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Waar ben je naar opzoek"
          />
        </SearchWrapper>
      </Form>
    </Root>
  );

  function onHandleSubmit(e: FormEvent<HTMLFormElement>) {
    if (!input) e.preventDefault();
    searchFieldRef.current!.blur();
  }

  function onHandleSearchClick() {
    if (!input) {
      searchFieldRef.current!.focus();
      return;
    }

    formRef.current!.submit();
  }
}
