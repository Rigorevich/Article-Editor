export interface CodeData {
  code: string;
}

export interface Code {
  type: "code";
  language: string;
  data: CodeData;
}
