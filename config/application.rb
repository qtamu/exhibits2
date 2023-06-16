require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

require_relative 'boot'
require 'rails/all'
module TamuSpotlight
  class Application < Rails::Application
    config.action_mailer.default_url_options = { host: "localhost:4200", from: "noreply@example.com" }
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.to_prepare do
      Spotlight::Exhibit.send(:include, ExhibitExtension)
    end
  end
end
