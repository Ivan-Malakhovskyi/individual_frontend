Login.jsx

```jsx
const navigate = useNavigate();

if (resp.success) {
  navigate("/games", { replace: true });
  return resp;
}
```

GamesPage.jsx

```jsx
const [searchParams, setSearchParams] = useSearchParams();

const game = searchParams.get("search") ?? "";

const filteredGames = games.filter(({ title }) =>
  title.toLowerCase().includes(game.toLowerCase()),
);

const query = search => {
  const params = search !== "" ? { search } : {};
  setSearchParams(params);
};

if (filteredGames.length === 0) {
  return (
    <div>
      <h2>Such game not found</h2>
      <p>Try to change filter {game}</p>
    </div>
  );
}
```

```jsx
const [searchParams] = useSearchParams();
const params = useMemo(
  () => Object.fromEntries([...searchParams]),
  [searchParams],
);
const { name, maxPrice, inStock } = params;
```

GameInfo.jsx

```jsx
const { gameId } = useParams();
const location = useLocation();
console.log(location.state);

const game = games.find(({ id }) => id === Number(gameId));

if (!game) {
  return <div>Such game not founded</div>;
}

STEP 1

const backLink = location.state?.from ?? "/games";

<Link to={backLink}>Back to product</Link>;
```

GameListItem.jsx

```jsx


STEP 2
  const location = useLocation();


    <Link to={`/games/${id}`} key={id} state={{ from: location }}>
      <span>{img}</span>
      <p>{title}</p>
      <p>{genre}</p>
      <p>{"⭐".repeat(rating)}</p>
    </Link>

```

LayoutPage.jsx

```jsx
      <Nav />

      <main>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </main>
```

App.jsx

```jsx
<Route path="/" element={<LayoutPage />}></Route>
```

```jsx
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const GamesPage = lazy(() => import("./pages/GamesPage.jsx"));
const GameInfoPage = lazy(() => import("./pages/GameInfoPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
```
