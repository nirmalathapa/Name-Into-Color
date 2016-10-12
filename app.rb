require 'sinatra'
require 'sinatra/json'
require_relative 'color'

before do
   content_type :json
   headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']  
end

get '/' do
  File.read(File.join('public', 'index.html'))
end

post '/api/colors' do
  color = Color.new params['name']
  json color.hex_colors
end
