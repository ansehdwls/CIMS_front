const config = {
  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  basename: '',
  defaultPath: '/dashboard',
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: '5px',
  productionUrl: process.env.REACT_APP_PRODUCTION_URL || 'http://localhost:5100',
  kakaoKeywordUrl: 'https://dapi.kakao.com/v2/local/search/keyword.json',
  kakaoAk: process.env.REACT_APP_KAKAOAK
};

export default config;
