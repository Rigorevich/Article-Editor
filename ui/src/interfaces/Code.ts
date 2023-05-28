type CodeType = "code";

export interface CodeData {
  content: string;
}

export interface Code {
  type: CodeType;
  data: CodeData;
}
