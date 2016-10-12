require 'sinatra'
require 'sinatra/json'
require_relative 'color'

get '/' do
  File.read(File.join('public', 'index.html'))
end

post '/api/colors' do
   headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']  
  color = Color.new params['name']
  json color.hex_colors
end
