type CodeType = "code";

export interface CodeData {
  code: string;
}

export interface Code {
  type: CodeType;
  language: string;
  data: CodeData;
}
