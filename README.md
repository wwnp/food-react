## PROJECT WHATTOCOOK
demo: 

###### :
<p>

  

</p>

<details>
  <summary>Output gh pages</summary>
  <p>

    npm i gh-pages -D

    ---
    
    package.json:
      "homepage":"https://wwnp.github.io/food-react/",
      "scripts": {
        ...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }, 

    ---

    if SPA:
      <BrowserRouter basename='/react-food'>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
              ...
          </Route>
        </Routes>
      </BrowserRouter>

    test
  </p>
</details>
