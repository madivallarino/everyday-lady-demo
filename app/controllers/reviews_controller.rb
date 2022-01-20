class ReviewsController < ApplicationController

    def create
        review = Review.create(star_rating: params[:star_rating], review: params[:review], user_id: params[:user_id], product_name: params[:product_name])
        render json: review, status: :ok
    end

    def itemreviews
        reviews = Review.where(product_name: params[:name])
        render json: reviews, status: :ok
    end
end
