import * as React from "react";
import { DropdownContainer } from "./stories/DropdownContainer";
import { ListItem } from "./stories/ListItem";
import { Button } from "./stories/Button";
import data from "./data.json";
import { FlexRowContainer } from "./stories/FlexRowContainer";
import { Footer } from "./Footer";
import { SearchResults } from "./SearchResults";
import { Chip } from "./stories/Chip";
import { Invited } from "./Invited";
import "./App.css";
import { WebLink } from "./WebLink";

export type AccessOption = "full" | "edit" | "view" | "no";

export interface InvitedData {
  id: number;
  name: string;
  type: string;
  avatar: string;
  access: AccessOption;
  member?: number;
}

function App() {
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [invitedList, setInvitedList] = React.useState<InvitedData[]>([
    {
      id: 5,
      name: "Everyone at OSlash",
      type: "group",
      access: "full",
      avatar: "/images/oslash.png",
      member: 54,
    },
  ]);
  const [access, setAccess] = React.useState<AccessOption>("full");
  const addToInvited = (invite: InvitedData) => {
    const inviteAlreadyExits = [...invitedList].filter(
      (item) => item.id === invite.id
    );
    if (inviteAlreadyExits.length > 0) {
      return;
    }
    const invited = [...invitedList];
    invited.push(invite);
    setInvitedList(invited);
  };

  const removeInvite = (id: number) => {
    const newInvited = [...invitedList].filter((item) => item.id !== id);
    if (newInvited.length !== -1) {
      setInvitedList(newInvited);
    }
  };

  const changeInvitedAccess = (id: number, accessType: AccessOption) => {
    const newInvited = [...invitedList].map((item) => {
      if (item.id === id) {
        return { ...item, access: accessType };
      }
      return item;
    });
    setInvitedList(newInvited);
  };

  const filteredData = data.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <Button
        onClick={() => {
          setOpenDropdown((current) => !current);
        }}
        variant="dark"
        borderRadius="rounded"
        rightIcon={
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0001 5.40001C11.4875 5.40002 11.9632 5.25169 12.3642 4.97473C12.7652 4.69777 13.0723 4.3053 13.2448 3.84953C13.4173 3.39376 13.447 2.89628 13.3299 2.42324C13.2128 1.95019 12.9544 1.52401 12.5892 1.20137C12.224 0.878721 11.7692 0.674899 11.2853 0.617005C10.8015 0.559111 10.3114 0.649888 9.88041 0.877266C9.44938 1.10464 9.09779 1.45785 8.87238 1.88991C8.64697 2.32197 8.55843 2.81241 8.61854 3.29601L4.66654 5.27201C4.32752 4.94509 3.89982 4.72514 3.43669 4.63956C2.97357 4.55398 2.4955 4.60656 2.06205 4.79073C1.62859 4.9749 1.2589 5.28254 0.999025 5.67531C0.739153 6.06809 0.600586 6.52865 0.600586 6.99961C0.600586 7.47057 0.739153 7.93113 0.999025 8.3239C1.2589 8.71668 1.62859 9.02431 2.06205 9.20849C2.4955 9.39266 2.97357 9.44523 3.43669 9.35965C3.89982 9.27407 4.32752 9.05413 4.66654 8.72721L8.61854 10.7032C8.54854 11.265 8.67939 11.8335 8.98796 12.3081C9.29654 12.7827 9.76297 13.133 10.3048 13.297C10.8467 13.4611 11.4291 13.4282 11.9491 13.2044C12.4691 12.9805 12.8932 12.5801 13.1465 12.0738C13.3998 11.5674 13.466 10.9879 13.3333 10.4375C13.2006 9.88715 12.8776 9.4014 12.4215 9.06612C11.9653 8.73084 11.4053 8.56761 10.8404 8.60529C10.2755 8.64296 9.74215 8.87912 9.33454 9.27201L5.38254 7.29601C5.40675 7.09942 5.40675 6.9006 5.38254 6.70401L9.33454 4.72801C9.76494 5.14401 10.3521 5.40001 11.0001 5.40001Z"
              fill="white"
            />
          </svg>
        }
        text="Share"
      />
      {openDropdown && (
        <DropdownContainer
          onClose={() => {
            setOpenDropdown(false);
          }}
        >
          <ul>
            {searchQuery === "" && <WebLink />}
            <ListItem itemDirection="column">
              {searchQuery !== "" && (
                <div className="chips__container">
                  {invitedList.map((item) => (
                    <Chip
                      key={item.id}
                      id={item.id}
                      text={item.name}
                      removeInvite={removeInvite}
                    />
                  ))}
                </div>
              )}
              <FlexRowContainer justify="center">
                <div className="search-field__container">
                  <input
                    type="text"
                    placeholder="People, emails, groups"
                    className="input-field"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                    }}
                  />
                  <select
                    className="select-field"
                    value={access}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      setAccess(e.target.value as AccessOption);
                    }}
                  >
                    <option value="full">Full access</option>
                    <option value="edit">Can edit</option>
                    <option value="view">Can view</option>
                    <option value="no">No access</option>
                  </select>
                </div>
                <div className="invite-button__container">
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                    }}
                    borderRadius="right-rounded"
                    text="Invite"
                  />
                </div>
              </FlexRowContainer>
            </ListItem>
            {searchQuery === "" && (
              <Invited
                invitedList={invitedList}
                changeInvitedAccess={changeInvitedAccess}
              />
            )}
          </ul>
          {searchQuery !== "" && (
            <SearchResults
              filteredData={filteredData}
              addToInvited={addToInvited}
              access={access}
            />
          )}
          <Footer />
        </DropdownContainer>
      )}
    </div>
  );
}

export default App;
