const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center">
      <p className="font-mono text-xs text-muted-foreground">
        Designed & Built by{' '}
        <a
          href="https://wizaard.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Zafir Ahamed Abdul Rauf
        </a>
      </p>
      <p className="font-mono text-xs text-muted-foreground/50 mt-2">
        © {new Date().getFullYear()} • All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
