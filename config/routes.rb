Rails.application.routes.draw do
  resources :wish_list_items
  resources :wish_lists
  resources :reviews
  resources :cart_items
  resources :carts
  resources :products
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/home", to: "products#home_products"
  get "/clothing", to: "products#clothing_products"
  get "/lifestyle", to: "products#lifestyle_products"
  get "/giftcard", to: "products#giftcards"
  get "/clothings", to: "products#clothings"
  get "/lifestyles", to: "products#lifestyles"
  get "/homes", to: "products#homes"
  get "/cart", to: "carts#show"
  get "/orderedcarts/:id", to: "carts#purchasedcarts"
  delete "/deleteitem/:id", to: "cart_items#delete"
  patch '/purchased/:id', to: "carts#purchased"
  patch '/discount/:id', to: "carts#discount"
  post '/addtocart/:id', to: 'cart_items#additem'
  patch '/quantity/:id', to: 'cart_items#quantity'
  post '/addtowishlist/:id', to: 'wish_list_items#addwishlist'
  get "/wishlist", to: "wish_lists#show"
  delete "/deletelistitem/:id", to: "wish_list_items#delete"
  post "/addreview", to: "reviews#create"
  get "/specificreviews/:name", to: "reviews#itemreviews"
end
