import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Editor } from "./editor-1/editor";

const defaultValue = `

<h4>This is Heading 4</h4>
<code>This is code</code>

<pre><code class="language-javascript">for (var i=1; i &#x3C;= 20; i++) {
  if (i % 15 == 0)
    return "FizzBuzz"
  else if (i % 3 == 0)
    return "Fizz"
  else if (i % 5 == 0)
    return "Buzz"
  else
    return i
  }</code></pre>
`;

export default function Editor1() {
  const [content, setContent] = useState(defaultValue);
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Editor
        fullItem={true}
        value={content}
        onChange={(value) => setContent(value)}
        sx={{ maxHeight: 720 }}
      />
    </Stack>
  );
}
