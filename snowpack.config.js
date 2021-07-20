module.exports = {
  mount: {
    public:'/',
    src:'/_dist_'
  },
  plugins:[
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-optimize',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-sass'
  ],
  alias:{
    '~':'./src'
  },
  devOptions:{
    //port:8080,
    open:'none'
  }
}
