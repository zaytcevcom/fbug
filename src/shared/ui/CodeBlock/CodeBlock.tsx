import React, {ReactNode, useEffect, useRef} from 'react';
import Prism from 'prismjs';
import dedent from 'dedent';

type CodeBlockProps = {
    children?: ReactNode;
    language?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({children, language = 'javascript'}) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (ref.current) {
            Prism.highlightElement(ref.current);
        }
    }, [children]);

    return (
        <pre>
            <code ref={ref} className={`language-${language}`}>
                {typeof children === 'string' ? dedent(children) : children}
            </code>
        </pre>
    );
};

export default CodeBlock;
