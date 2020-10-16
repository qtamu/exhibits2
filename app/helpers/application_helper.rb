module ApplicationHelper
  include SpotlightHelper

  def iiif_drag_n_drop(manifest, width: '30px')
    # link_url = format "https://library.tamu.edu/digital-assets/iiif?%{query}", query: { manifest: manifest }.to_query
    link_url = format "#{Rails.application.config.iiif_info_url}?%{query}", query: { manifest: manifest }.to_query
    link_to link_url, class: 'iiif-logo', data: { turbolinks: false } do
      image_tag 'iiif-drag-n-drop.svg', width: width, alt: 'IIIF Drag-n-drop'
    end
  end

  def get_presentation_manifest(document, index)
    return document.response['response']['docs'][index]['iiif_manifest_url_ssi']
  end
end
