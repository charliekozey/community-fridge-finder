class FridgesController < ApplicationController
  before_action :set_fridge, only: %i[ show edit update destroy ]

  # GET /fridges or /fridges.json
  def index
    @fridges = Fridge.all
    render json: @fridges
  end

  # GET /fridges/1 or /fridges/1.json
  def show
    render json: @fridge
  end

  # GET /fridges/new
  def new
    @fridge = Fridge.new
end

  # GET /fridges/1/edit
  def edit
  end

  # POST /fridges or /fridges.json
  def create
    @fridge = Fridge.create!(fridge_params)

    # respond_to do |format|
    #   if @food.save
    #     format.html { redirect_to food_url(@food), notice: "Food was successfully created." }
    #     format.json { render :show, status: :created, location: @food }
    #   else
    #     format.html { render :new, status: :unprocessable_entity }
    #     format.json { render json: @food.errors, status: :unprocessable_entity }
    #   end
    # end

    render json: @fridge
  end

  # PATCH/PUT /fridges/1 or /fridges/1.json
  def update
    # respond_to do |format|
    #   if @fridge.update(fridge_params)
    #     format.html { redirect_to fridge_url(@fridge), notice: "Fridge was successfully updated." }
    #     format.json { render :show, status: :ok, location: @fridge }
    #   else
    #     format.html { render :edit, status: :unprocessable_entity }
    #     format.json { render json: @fridge.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # DELETE /fridges/1 or /fridges/1.json
  def destroy
    @fridge.destroy

    render json: { "message": "Food deleted" }

    # respond_to do |format|
    #   format.html { redirect_to fridges_url, notice: "Fridge was successfully destroyed." }
    #   format.json { head :no_content }
    # end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fridge
      @fridge = Fridge.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def fridge_params
      params.require(:fridge).permit(:location)
    end
end
