import React from "react";
import "./SignUp.css";
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
declare const SignUp: ({ primary, label, secretKey, project_name, user_id, }: SignUpProps) => JSX.Element;
export default SignUp;
