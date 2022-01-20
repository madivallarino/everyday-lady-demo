class ProductsController < ApplicationController

    skip_before_action :authorize, only: [:homes, :clothings, :lifestyles, :show]

    def index 
        products = Product.all
        render json: products
    end

    def home_products
       
        products = Product.where(category: "home")
        render json: products
    end

    def homes
        products = Product.where(category: "home")
        render json: products
    end

    def clothings
        products = Product.where(category: "clothing")
        render json: products
    end

    def lifestyles
        products = Product.where(category: "lifestyle")
        render json: products
    end

    def show 
        product = Product.find_by(id: params[:id])
       
        if product
            render json: product, include: :reviews, status: :ok
        else 
            render json: {error: "product not found"}, status: :not_found
        end
    end
   
    def lifestyle_products
        products = Product.where(category: "lifestyle")
        render json: products 
    end
    
    def clothing_products
        products = Product.where(category: "clothing")
        render json: products 
    end

    def giftcards
        products = Product.where(category: "giftcard")
        render json: products
    end
end
