import React from "react";

interface CodeSnippetProps {
  title: string;
  code?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ code = "" }) => (
  <div className="">
    <pre className="">{code}</pre>
  </div>
);
