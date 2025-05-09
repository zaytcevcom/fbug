import React, {useEffect, useRef} from 'react';
import Prism from 'prismjs';
import dedent from 'dedent';

type CodeBlockProps = {
    code: string;
    language?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({code, language = 'javascript'}) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (ref.current) {
            Prism.highlightElement(ref.current);
        }
    }, [code]);

    return (
        <pre>
            <code ref={ref} className={`language-${language}`}>
                {dedent(code)}
            </code>
        </pre>
    );
};

export default CodeBlock;
