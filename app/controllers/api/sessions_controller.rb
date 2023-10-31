require 'byebug'

class Api::SessionsController < ApplicationController
    def index
        session[:session_hello] ||= "World"
        cookies[:cookies_hello] ||= "World"
        render json: { session: session, cookies: cookies.to_hash }
    end

    def new
        print "checking session"
    end

    def create
        print "!!!!!!!!!!!!!!!!!! #{params} !!!!!!!!!!"
        # user = User.find_by(username: params[:username])
        # print "USER USER USER USER #{user}"
        # session[:user_id] = user.id
        # render json: user
    end

    def destroy
        print "logging out"
        # return {"message": "user logged out"}.to_json, 200
    end
end
