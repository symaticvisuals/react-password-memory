import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { axiosRequest } from "../../utils/axiosRequest";
export interface SignUpProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  secretKey?: string;
  project_name?: string;
  user_id?: number;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
const SignUp = ({
  primary = true,

  label = "Sign Up",
  secretKey = "TY858AA8nLimeBI",
  project_name = "1st project",
  user_id = 6,
}: SignUpProps) => {
  const [emojis, setEmojis] = useState([]);

  const onClick = () => {
    console.log(secretKey);
    console.log(project_name);
    console.log(user_id);
    axiosRequest({
      method: "POST",
      url: "/serviceUser/getEmojiForPatternUser?emojiName=smil",
      data: {
        projectName: project_name,
        userId: user_id,
        projectSecret: secretKey,
      },
    })
      .then((res: any) => {
        setEmojis(res.data.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const [username, setUsername] = React.useState("");
  const [pattern, setPattern] = React.useState<any>([]);
  const [password, setPassword] = React.useState<any>([]);
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <>
      <h1>Sign Up with {project_name}</h1>
      <div className="flex-col w-1-3 gap-10">
        <label className="">Username</label>
        <input
          type="text"
          name="Usernmae"
          id="username"
          placeholder="Enter your username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
        <label className="">Unique Pattern</label>
        {emojis.length === 0 && (
          <button className="signup-button" onClick={onClick}>
            Create Story
          </button>
        )}

        {emojis.length > 0 && (
          <input
            type="text"
            name="Password"
            value={
              password.length > 0
                ? password.map((item: any) => item).join("")
                : ""
            }
            onKeyDown={(event: any) => {
              if (event.key === "Backspace") {
                setPassword(password.slice(0, -1));
                setPattern(pattern.slice(0, -1));
              }
            }}
            id="password"
            placeholder="Create a Story"
          />
        )}
        <div className="flex gap-10">
          {emojis.length > 0 &&
            emojis.map((emoji: any) => (
              <button
                onClick={() => {
                  setPattern([
                    ...pattern,
                    emoji.emoji.codePointAt(0).toString(16),
                  ]);

                  setPassword([...password, emoji.emoji]);
                  console.log(pattern);
                }}
                style={{ padding: "6px" }}>
                {emoji.emoji}
              </button>
            ))}
        </div>
        {pattern.length > 0 ? (
          <button className="signup-button">SignUp</button>
        ) : null}
      </div>
    </>
  );
};

export default SignUp;
