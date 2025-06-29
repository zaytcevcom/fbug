import React, {ReactNode, useEffect, useRef} from 'react';
import Prism from 'prismjs';
import dedent from 'dedent';

type CodeBlockProps = {
    children?: ReactNode;
    language?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({children, language = 'javascript'}) => {
    const ref = useRef<HTMLElement>(null);
    let processedChildren = children;

    useEffect(() => {
        if (ref.current) {
            Prism.highlightElement(ref.current);
        }
    }, [children]);

    if (language === 'json') {
        try {
            const jsonObj = JSON.parse(String(children));
            processedChildren = JSON.stringify(jsonObj, null, 2);
        } catch {}
    }

    return (
        <pre>
            <code ref={ref} className={`language-${language}`}>
                {typeof processedChildren === 'string'
                    ? dedent(processedChildren)
                    : processedChildren}
            </code>
        </pre>
    );
};

export default CodeBlock;
